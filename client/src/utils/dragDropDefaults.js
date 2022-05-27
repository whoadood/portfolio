export const overrideEventDefaults = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
