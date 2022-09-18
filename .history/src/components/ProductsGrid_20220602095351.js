


const ProductsGrid = ({
  items,
  style,
  onPress,
  HeaderComponent,
  onScroll,
  contentContainerStyle,
  scrollIndicatorInsets,
}) => {
  const {colors} = useTheme();

  return (
    <Animated.FlatList
      data={items}
      style={[styles.gridView, style]}
      numColumns={3}
      nestedScrollEnabled={true}
      spacing={5}
      renderItem={({item, index}) => (
        <GridCard
          index={index}
          text={item.product_name}
          id={item.product_id}
          pic_url={item.pic_url}
          colors={colors}
          onPress={color => (onPress ? onPress(index, color) : {})}
        />
      )}
      ListHeaderComponent={HeaderComponent}
      onScroll={onScroll}
      contentContainerStyle={contentContainerStyle}
      scrollIndicatorInsets={scrollIndicatorInsets}
    />
  );
};
