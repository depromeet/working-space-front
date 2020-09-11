import React, { useCallback, useRef } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { WindowScroller } from "react-virtualized";
import LoadingBar from "../LoadingBar/LoadingBar";

const InfiniteScroller = props => {
  const { itemSize, datas, hasNextPage, isNextPageLoading, loadNextPage, Item, threshold, overscanCount } = props;
  const isItemLoaded = useCallback(index => !hasNextPage || index < datas.length, [hasNextPage, datas]);
  const loadMoreItems = useCallback(isNextPageLoading ? () => {} : loadNextPage, [isNextPageLoading, loadNextPage]);
  const fixedSizeListRef = useRef();
  const itemCount = hasNextPage ? datas.length + threshold : datas.length;

  const handleWindowScroll = useCallback(({ scrollTop }) => {
    fixedSizeListRef.current.scrollTo(scrollTop);
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
                  itemData={datas}
                  onItemsRendered={onItemsRendered}
                  overscanCount={overscanCount}
                  style={{ height: "100% !important" }}
                  {...props}
                >
                  {Item}
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
  Item: ({ style, data }) => <div style={style}>{data}</div>,
};

export default InfiniteScroller;
