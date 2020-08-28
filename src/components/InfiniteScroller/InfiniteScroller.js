import React, { useCallback, useRef, memo } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { WindowScroller } from "react-virtualized";
import LoadingBar from "../LoadingBar/LoadingBar";

const InfiniteScroller = props => {
  const { itemSize, datas, hasNextPage, isNextPageLoading, loadNextPage, LoadingIndicator, Item, threshold, overscanCount } = props;
  const isItemLoaded = useCallback(index => !hasNextPage || index < datas.length, [hasNextPage, datas]);
  const loadMoreItems = useCallback(isNextPageLoading ? () => {} : loadNextPage, [isNextPageLoading, loadNextPage]);
  const fixedSizeListRef = useRef();
  const MemoizedItem = memo(({ data }) => <Item data={data} />);
  const itemCount = hasNextPage ? datas.length + threshold : datas.length;

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
                  overscanCount={overscanCount}
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
  threshold: 10, // 아래 몇개의 Row가 남았을때 fetch 할건지
  overscanCount: 10, // 아래 몇개의 Row가 미리 렌더링 될지
  loadNextPage: () => console.log("loadNextPage"),
  LoadingIndicator: () => <LoadingBar />,
  Item: ({ data }) => <div>{data}</div>,
};

export default InfiniteScroller;
