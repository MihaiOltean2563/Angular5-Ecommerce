// export interface AppUser {
//     name: string;
//     email: string;
//     isAdmin: boolean;
// }

export interface AppUser {
    uid: string;
    email: string;
    photoUrl?: string;
    displayName?: string;
}