import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCSQSOv-CsvbYtV-an50xrxql3f4PaZjmM",
	authDomain: "crwn-db-f5a27.firebaseapp.com",
	databaseURL: "https://crwn-db-f5a27.firebaseio.com",
	projectId: "crwn-db-f5a27",
	storageBucket: "crwn-db-f5a27.appspot.com",
	messagingSenderId: "794012653666",
	appId: "1:794012653666:web:5ddde50df65f626980593b",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('Error creating user', error.message)
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
