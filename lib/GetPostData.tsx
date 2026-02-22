export default async function GetAllPostData() {
  const bloData = await fetch(
    "https://backend-jamichek-weight-loss-tampa.vercel.app/site/blog",
    {
      next: { revalidate: 200 },
    }
  );
  return bloData.json();
}
