import React, { useCallback, useRef, memo, useEffect, useMemo } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { WindowScroller } from "react-virtualized";
import LoadingBar from "../LoadingBar/LoadingBar";

const InfiniteScroller = props => {
  const { itemSize, datas, hasNextPage, isNextPageLoading, loadNextPage, LoadingIndicator, Item } = props;
  const itemCount = hasNextPage ? datas.length + 1 : datas.length;
  const isItemLoaded = useCallback(index => !hasNextPage || index < datas.length, [hasNextPage, datas]);
  const loadMoreItems = useCallback(isNextPageLoading ? () => {} : loadNextPage, [isNextPageLoading, loadNextPage]);
  const fixedSizeListRef = useRef();
  const MemoizedItem = memo(({ data }) => <Item data={data} />);

  const handleWindowScroll = useCallback(({ scrollTop }) => {
    fixedSizeListRef.current.scrollTo(scrollTop);
  }, []);

  const Row = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return (
        <div style={style}>
          <LoadingIndicator />
        </div>
      );
    }

    return (
      <div style={style}>
        <MemoizedItem data={datas[index]} />
      </div>
    );
  };

  return (
    <>
      <WindowScroller onScroll={handleWindowScroll}>{() => <div />}</WindowScroller>
      <InfiniteLoader itemCount={itemCount} loadMoreItems={loadMoreItems} isItemLoaded={isItemLoaded}>
        {({ onItemsRendered, ref }) => {
          return (
            <AutoSizer>
              {({ width, height }) => (
                <FixedSizeList
                  ref={listRef => {
                    ref(listRef);
                    fixedSizeListRef.current = listRef;
                  }}
                  width={width}
                  height={height}
                  itemCount={itemCount}
                  itemSize={itemSize}
                  onItemsRendered={onItemsRendered}
                  style={{ height: "100% !important" }}
                  {...props}
                >
                  {Row}
                </FixedSizeList>
              )}
            </AutoSizer>
          );
        }}
      </InfiniteLoader>
    </>
  );
};

InfiniteScroller.defaultProps = {
  itemSize: 20, // height
  datas: Array.from(Array(100), (v, i) => `row${i}`),
  hasNextPage: false,
  isNextPageLoading: false,
  loadNextPage: () => console.log("loadNextPage"),
  LoadingIndicator: () => <LoadingBar />,
  Item: ({ data }) => <div>{data}</div>,
};

export default InfiniteScroller;
