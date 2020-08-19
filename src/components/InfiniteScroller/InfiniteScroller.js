import React, { useCallback, useRef, memo, useState, useEffect } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { WindowScroller } from "react-virtualized";
import LoadingBar from "../LoadingBar/LoadingBar";

const InfiniteScroller = props => {
  const { itemSize, datas, hasNextPage, isNextPageLoading, loadNextPage, LoadingIndicator, Item } = props;
  const isItemLoaded = useCallback(index => !hasNextPage || index < datas.length, [hasNextPage, datas]);
  const loadMoreItems = useCallback(isNextPageLoading ? () => {} : loadNextPage, [isNextPageLoading, loadNextPage]);
  const fixedSizeListRef = useRef();
  const MemoizedItem = memo(({ data }) => <Item data={data} />);
  const [isMount, setIsMount] = useState(false);
  let itemCount;
  if (!datas.length) itemCount = 5;
  if (datas.length) itemCount = hasNextPage ? datas.length + 1 : datas.length;

  const handleWindowScroll = useCallback(({ scrollTop }) => {
    fixedSizeListRef.current.scrollTo(scrollTop);
  }, []);

  const Row = ({ index, style }) => {
    if (!isMount || !isItemLoaded(index)) {
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

  useEffect(() => {
    setTimeout(() => setIsMount(true), 300);
  }, []);

  return (
    <>
      <WindowScroller onScroll={handleWindowScroll}>{() => <div />}</WindowScroller>
      <InfiniteLoader itemCount={itemCount} loadMoreItems={loadMoreItems} isItemLoaded={isItemLoaded}>
        {({ onItemsRendered, ref }) => {
          return (
            <AutoSizer disableHeight>
              {({ width }) => (
                <FixedSizeList
                  ref={listRef => {
                    ref(listRef);
                    fixedSizeListRef.current = listRef;
                  }}
                  width={width}
                  height={window.innerHeight}
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
