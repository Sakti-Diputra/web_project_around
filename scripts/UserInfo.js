export default class UserInfo {
    constructor(name, about) {
        this._name = name;
        this._about = about;
    }

    getUserInfo() {
        const UserInfo = {
            name: this._name,
            about: this._about,
        };
        return UserInfo;
    }
    
    setUserInfo({name, about}) {
        const profileName = document.querySelector(".profile__name");
        const profileAbout = document.querySelector(".profile__about");
        this._name = name;
        this._about = about;
        profileName.textContent = this._name;
        profileAbout.textContent = this._about;
    }
}