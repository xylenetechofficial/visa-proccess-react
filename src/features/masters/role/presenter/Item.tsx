import { deleteCountry } from "../repository"
import { CountryInterface } from "../type"

export default function Main(props: {
    index: number,
    country: CountryInterface,
    onClickEdit: (country: CountryInterface) => void
    fetchCountryList: any
}) {

    function onClickEdit() {
        props.onClickEdit(props.country)
    }

    async function onClickDelete() {
        if (!confirm("Are You Sure?"))
            return

        // call create
        const data = await deleteCountry(props.country.id ?? 0)
        // show alert
        alert(data.message)

        props.fetchCountryList()
    }

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.country.name}</td>
            <td>
                <button type="button" className="btn btn-warning" onClick={onClickEdit}>Edit</button>
                <button className="btn btn-danger" onClick={onClickDelete}>Delete</button>
            </td>
        </tr>
    )
}