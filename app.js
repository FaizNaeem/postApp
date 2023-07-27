import { getStorage, ref, uploadBytes ,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { db  } from "./firebase.mjs";
document.getElementById("btn").addEventListener("click", async () => {
    var textarea = document.getElementById("textarea").value;
    var text = document.getElementById("text").value;
    var file = document.getElementById("file").files[0];

   
        try {
            const docRef = await addDoc(collection(db, "postapp"), {
                textarea: textarea,
                text: text
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    
    
        const storage = getStorage();
        const storageRef = ref(storage, 'faiz');
    
        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    
    });
