
import axios from 'axios';
import Swal from 'sweetalert2'
const AddCoffees = () => {

    const hendleaddcoffees=(event)=>{
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
        //using axios---------->
        axios.post('http://localhost:5000/coffees',coffeesdetails)
        .then(data=>{
            console.log(data.data)
            const datas = data.data;
            if(datas.acknowledged){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your coffee has been add',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

        //axios ar age--------->
        // fetch('http://localhost:5000/coffees',{
        //     method:'POST',
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
        //             title: 'Your coffee has been add',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        // })
    }
    return (
        <div>
            <form onSubmit={hendleaddcoffees}>
                <div className="bg-[#F4F3F0] p-5">
                    <h1>Coffees</h1>
                    <div className="md:flex space-x-4">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">chaf</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="chaf" name="chif" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex space-x-4">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Supplar</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="supplar" name="supplar" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Tests</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Testy" name="tests" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add Cofffees" className="w-full mt-5 btn btn-success" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffees;