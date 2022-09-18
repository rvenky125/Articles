import React from 'react';
import {FlatList, RefreshControl} from 'react-native';

export const CompatibleScroll = (
  props = {
    refreshing: false,
    onRefresh: () => {},
  },
) => {
  return (
    <FlatList
      listKey={Math.random().toString()}
      data={[]}
      renderItem={null}
      keyExtractor={() => Math.random().toString()}
      ListHeaderComponent={<>{props.children}</>}
      contentContainerStyle={{flexGrow: 1, ...props.style}}
      keyboardShouldPersistTaps="handled"
      nestedScrollEnabled={true}
      refreshControl={
        props.onRefresh ? (
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={() => props.onRefresh()}
          />
        ) : null
      }
    />
  );
};
