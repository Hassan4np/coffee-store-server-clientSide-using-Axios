import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import axios from 'axios';
const Allcoffees = ({ coffee, coff, setcoff }) => {
    console.log(coffee)
    const { name, photo, chif, supplar, _id } = coffee;

    const hendledelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                //using axios---------->
                axios.delete(`http://localhost:5000/coffees/${id}`)
                .then(data=>{
                    console.log(data.data)
                    const datas = data.data;
                    if (datas.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                    const remaincoffees = coff.filter(coff => coff._id !== id);
                        setcoff(remaincoffees)

                })
                //using before axios------------->
                // fetch(`http://localhost:5000/coffees/${id}`, {
                //     method: 'DELETE',
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //         if (data.deletedCount > 0) {
                //             Swal.fire(
                //                 'Deleted!',
                //                 'Your file has been deleted.',
                //                 'success'
                //             )
                //         }
                //         const remaincoffees = coff.filter(coff => coff._id !== id);
                //         setcoff(remaincoffees)
                //     })
            }
        })
    }
    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl border ">
                    <div className=" flex">
                        <figure><img src={photo} alt="Movie" />
                        </figure>
                        <div className=" ml-10 p-5">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-title">{supplar}</p>
                            <p className="card-title">{chif}</p>
                        </div>
                    </div>
                    <div className="btn-group btn-group-vertical">
                        <button className="btn bg-green-500">details</button>
                        <Link to={`/updatecoffees/${_id}`}><button className="btn bg-success">update</button></Link>
                        <button className="btn bg-orange-500" onClick={() => hendledelete(_id)} >X</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Allcoffees;