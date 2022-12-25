const token = sessionStorage.getItem('token')

const Config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

export default Config