import {
  doc,
  deleteDoc,
  onSnapshot,
  collection,
  addDoc,
  query,
  where,
  serverTimestamp,
  orderBy,
  Timestamp,
} from "firebase/firestore";

import { db } from "./";

const successMessage = (message: string) => {};
const errorMessage = (message: string) => {};

export const addRole = async (values: any) => {
  try {
    await addDoc(collection(db, "roles"), {
      ...values,
    });
    successMessage(`${values.name} category added! 🎉`);
  } catch (err) {
    console.error(err);
    errorMessage("Error! ❌");
  }
};

export const deleteRole = async (id: string, name: string) => {
  try {
    //👇🏻 deletes the category
    await deleteDoc(doc(db, "roles", id));
    //👇🏻 delets the products within the category
    // const q = query(collection(db, "products"), where("category", "==", name));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.forEach((document) => {
    //     deleteDoc(doc(db, "products", document.id));
    //   });
    // });
    successMessage(`${name} category deleted 🎉`);
  } catch (err) {
    errorMessage("Encountered an error ❌");
    console.log(err);
  }
};

export const getRoles = async (setCategories: any) => {
  try {
    const unsub = onSnapshot(collection(db, "roles"), (doc) => {
      const docs: any = [];
      doc.forEach((d: any) => {
        docs.push({ ...d.data(), id: d.id });
      });
      setCategories(docs);
    });
  } catch (err) {
    console.error(err);
    setCategories([]);
  }
};
