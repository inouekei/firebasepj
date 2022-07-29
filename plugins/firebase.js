import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyArNuRu8nGfSbBjwupKB68ueH4W4O5aGuY",
      authDomain: "fir-pj-d507c.firebaseapp.com",
      projectId: "fir-pj-d507c",
      storageBucket: "fir-pj-d507c.appspot.com",
      messagingSenderId: "36708330596",
      appId: "1:36708330596:web:4ec6f1b37425aac12ec371",
      measurementId: "G-HVE2R95L1L"
    }
  )
}
  
export default firebase
