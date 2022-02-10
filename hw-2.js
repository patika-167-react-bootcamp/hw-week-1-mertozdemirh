Array.prototype.includesCi= function(val) {
    return this.map((item) => item.toLowerCase()).includes(val.toLowerCase())
}

const accessible = ["admin", "moderator", "superadmin", "guest"];
console.log(accessible.includesCi("adMin"));
