
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
const UpdateCoffees = () => {
    const updatecoffees =useLoaderData();
    console.log(updatecoffees)
    const { name, photo, chif, supplar,tests,_id } = updatecoffees;
    const hendleupdatecoffees=(event)=>{
        event.preventDefault();
        const form =  event.target;
        const name = form.name.value;
        const chif = form.chif.value;
        const supplar = form.supplar.value;
        const tests = form.tests.value;
        const photo = form.photo.value;
        const coffeesdetails = {
            name,chif,supplar,tests,photo
        }
        console.log(coffeesdetails)
        //using axios----------->
        axios.put(`http://localhost:5000/coffees/${_id}`,coffeesdetails)
        .then(data=>{
            console.log(data.data)
            const datas = data.data;
            if(datas.acknowledged){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your coffee has been update',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
        })

        //Befor using axois------------>
        // fetch(`http://localhost:5000/coffees/${_id}`,{
        //     method:'PUT',
        //     headers:{
        //         'content-Type': 'application/json',
        //     },
        //     body:JSON.stringify(coffeesdetails)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     if(data.acknowledged){
        //         Swal.fire({
        //             position: 'top-center',
        //             icon: 'success',
        //             title: 'Your coffee has been update',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        // })
    }

    return (
        <div>
            <h1>update coffees</h1>
            <div>
            <form onSubmit={hendleupdatecoffees}>
                <div className="bg-[#F4F3F0] p-5">
                    <h1>Coffees</h1>
                    <div className="md:flex space-x-4">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="name" defaultValue={name} name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">chaf</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="chaf" defaultValue={chif} name="chif" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex space-x-4">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Supplar</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="supplar"  defaultValue ={supplar} name="supplar" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Tests</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Testy" name="tests" defaultValue={tests} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo url" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add Cofffees" className="w-full mt-5 btn btn-success" />
                </div>
            </form>
            </div>

        </div>
    );
};

export default UpdateCoffees;