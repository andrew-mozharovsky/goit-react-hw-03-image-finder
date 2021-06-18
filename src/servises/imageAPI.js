const fetchImage = async ({ searchQuery, page }) => {
  return await fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=21324374-26e3d3b86bafb4c298c1385cf&image_type=photo&orientation=horizontal&per_page=12`
  ).then((r) => r.json());
};

const ApoServises = {
  fetchImage,
};
export default ApoServises;
