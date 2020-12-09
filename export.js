const executeExport = (user: User) => {
    let result = true;
    const date = new Date();
    if(user?.role === 'ADMIN' && this.timeIsBetween02and06(date)) {
        this.executeExport();
    } else if(this.user?.role === 'SYSTEM') {
        this.executeExport();
    } else {
        result = false;
    }
    return result;
}