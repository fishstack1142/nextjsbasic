export const userInfo = [

    {id: 1, name: 'Tim'},
    {id: 2, name: 'Tam'},
    {id: 3, name: 'Tom'},
    {id: 4, name: 'Tem'},
    {id: 5, name: 'Tum'}
]

export default (req, res) => {

    res.status(200).json(userInfo);

}