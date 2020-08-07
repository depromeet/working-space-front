import React, { useCallback } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

const InfiniteScroller = props => {
  const { itemSize, datas, hasNextPage, isNextPageLoading, loadNextPage, LoadingIndicator, Item } = props;
  const itemCount = hasNextPage ? datas.length + 1 : datas.length;
  const isItemLoaded = useCallback(index => !hasNextPage || index < datas.length, [hasNextPage, datas]);
  const loadMoreItems = useCallback(isNextPageLoading ? () => {} : loadNextPage, [isNextPageLoading, loadNextPage]);

  const Row = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return (
        <div style={style}>
          <LoadingIndicator />
        </div>
      );
    }

    return <div style={style}>{<Item data={datas[index]} />}</div>;
  };

  return (
    <InfiniteLoader itemCount={itemCount} loadMoreItems={loadMoreItems} isItemLoaded={isItemLoaded}>
      {({ onItemsRendered, ref }) => (
        <AutoSizer>
          {({ width, height }) => (
            <FixedSizeList width={width} height={height} itemCount={itemCount} itemSize={itemSize} ref={ref} onItemsRendered={onItemsRendered} {...props}>
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
};

InfiniteScroller.defaultProps = {
  itemSize: 20, // height
  datas: Array.from(Array(100), (v, i) => `row${i}`),
  hasNextPage: false,
  isNextPageLoading: false,
  loadNextPage: () => console.log("loadNextPage"),
  LoadingIndicator: () => <div>Loading...</div>,
  Item: ({ data }) => <div>{data}</div>,
};

export default InfiniteScroller;
