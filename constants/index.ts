export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Buat Acara",
    route: "/events/create",
  },
  {
    label: "Profilku",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
