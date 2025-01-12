import { collection, doc, setDoc, where, query, getDocs, CACHE_SIZE_UNLIMITED, getDoc, updateDoc } from "firebase/firestore"; 
import app from "@/lib/firebase";
import { initializeFirestore} from "firebase/firestore";



const db = initializeFirestore(app,{
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})

 // This gets the user from the database

export const getUserCollection = async (key) => {
    const user = await getDoc(doc(db, "users", key))

    if(user.exists()){
       return user.data() 
    }
    else{
        return null
    }
}

// This sets the user in the database

export const setUserCollection = async (key, data) => {

    const user = await getDoc(doc(db, "users", key))
    
    if(!user.exists()){
        await setDoc(doc(db, "users", key), data);

        return true
    }

    else{
        return false
    }
}

//  Update Members

export const updateCollectionMembers = async (key, data) => {
    
    const updatedUser = await  updateDoc(doc(db, "users", key), {members: data})

    if(updatedUser){
        return updatedUser
    }

    else{
        return null
    }
}

export const updateCollectionToken = async (key, data) => {
    const user = await getDoc(doc(db, "users", key))
    if(user.exists()){
        const updatedUser = await  updateDoc(doc(db, "users", key), {reset_tokens: data})

        return updatedUser
    }

    else{
        return null
    }
}

export const updateCollectionAttendance = async (key, data) => {

    const updatedUser = await  updateDoc(doc(db, "users", key), {attendance: data})

    if(updatedUser){
        return updatedUser
    }

    else{
        return null
    }
}
export const updateCollectionLocation = async (key, data) => {
    
    const updatedUser = await  updateDoc(doc(db, "users", key), {coordinates: data})
    
    if(updatedUser){
        return updatedUser
    }

    else{
        return null
    }
}
