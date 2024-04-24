import supabase from "./supabase";

export async function addQuote(newQuote) {
  const { data, error } = await supabase
    .from("quotes")
    .insert([newQuote])
    .select();

  if (error) {
    console.log(error);
    throw new Error("A quote could not be added");
  }

  console.log(data);
}

export async function getAllQuotes() {
  const { data, error } = await supabase.from("quotes").select("*");

  if (error) {
    console.log(error);
    throw new Error("A quote could not be added");
  }

  return data;
}
