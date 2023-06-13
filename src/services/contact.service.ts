/**
 contact.service.ts
 -------------------
 File  to manage contacts collection to firebase.
 @author Ronald Tchuekou
 @email ronaldtchuekou@gmail.com
 */
import {addDoc, collection, FirestoreDataConverter, QueryDocumentSnapshot, updateDoc} from "firebase/firestore"
import ContactModel from "../models/contact.model";
import {fireFirestore} from "../helpers/firebase.helper";

const COLLECTION_NAME = 'Contacts'

/**
 * To convert contacts
 */
export const articleConverter: FirestoreDataConverter<ContactModel> = {
    toFirestore(contact: ContactModel) {
        return {
            id: contact.id || null,
            content: contact.content || null
        };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot<ContactModel>, options) {
        return snapshot.data(options) || null;
    }
};

/**
 * To create new contact.
 * @param contact
 */
export const createNewContact = async (contact: ContactModel) => {
    try {
        const articlesCollection = collection(fireFirestore, COLLECTION_NAME)
        const storeRef = await addDoc(articlesCollection, contact);
        await updateDoc(storeRef, {id: storeRef.id})
        return {
            ...contact,
            id: storeRef.id
        } as ContactModel
    } catch (e: any) {
        return {
            error: true,
            message: e.message,
            stack: e
        }
    }
}
