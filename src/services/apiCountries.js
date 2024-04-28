import supabase from "./supabase";

export async function getCountries() {
  const { data, error } = await supabase.from("countries").select("*");

  if (error) {
    console.log(error);
    throw new Error("Countries could not be loaded");
  }

  return data;
}

export async function addCountry(newCountry) {
  const { data, error } = await supabase
    .from("countries")
    .insert([newCountry])
    .select();

  if (error) {
    console.log(error);
    throw new Error("A country could not be added");
  }

  console.log(data);
}

export async function updateCountry(country, id) {
  const { data, error } = await supabase
    .from("countries")
    .update(country)
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("A country could not be updated");
  }

  console.log(data);
}

export async function deleteCountry(id) {
  const { error } = await supabase.from("countries").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("A country could not be deleted");
  }
}
