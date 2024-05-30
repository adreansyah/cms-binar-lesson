import { useEffect, useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const fileTypes = ["JPG", "PNG", "GIF"];
const CarForm = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [state, setState] = useState({
        name: '',
        price: '',
        category: '',
        status: false,
        image: null,
    });
    const [preview, setpreview] = useState(null);
    useEffect(() => {
        if (id) {
            axios.get(`https://api-car-rental.binaracademy.org/admin/car/${id}`, {
                headers: {
                    access_token: localStorage?.getItem('TOKEN')
                }
            }).then(result => {
                setState(prev => ({
                    ...prev,
                    name: result?.data?.name,
                    price: result?.data?.price,
                    category: result?.data?.category
                }))
                if (result?.data?.image) {
                    setpreview(result?.data?.image);
                }
            })
        }
    }, [id])
    const onchange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }
    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setpreview(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    const handleChange = (file) => {
        getBase64(file)
        setState(prev => ({
            ...prev,
            image: file
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            const formData = new FormData();
            if (state?.image) {
                formData.append("image", state?.image);
            }
            formData.append("name", state?.name);
            formData.append("category", state?.category);
            formData.append("price", state?.price);
            formData.append("status", state?.status);
            axios.put(`https://api-car-rental.binaracademy.org/admin/car/${id}`, formData, {
                headers: {
                    access_token: localStorage?.getItem('TOKEN')
                }
            }).then(() => navigate('/car'))
        }
        else {
            const formData = new FormData();
            formData.append("image", state?.image);
            formData.append("name", state?.name);
            formData.append("category", state?.category);
            formData.append("price", state?.price);
            formData.append("status", state?.status);
            axios.post('https://api-car-rental.binaracademy.org/admin/car', formData, {
                headers: {
                    access_token: localStorage?.getItem('TOKEN')
                }
            }).then(() => navigate('/car'))
        }
    }
    return (
        <div>
            <div className="d-flex justify-content-between mb-4">
                <h4>{props.title}</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="bg-white p-3">
                    <Row>
                        <Col lg={10} className="d-flex flex-column gap-4">
                            <div className="d-flex gap-4 align-items-center">
                                <label style={{ width: '135px' }}>Nama/tipe Mobile</label>
                                <Input onChange={onchange} name="name" className="w-50" value={state?.name} />
                            </div>
                            <div className="d-flex gap-4 align-items-center">
                                <label style={{ width: '135px' }}>Harga</label>
                                <Input onChange={onchange} name="price" className="w-50" value={state.price} />
                            </div>
                            <div className="d-flex gap-4 align-items-center">
                                <label style={{ width: '135px' }}>Foto</label>
                                {/* <Input className="w-50" /> */}
                                <FileUploader
                                    handleChange={handleChange}
                                    name="image"
                                    types={fileTypes}
                                    // eslint-disable-next-line react/no-children-prop
                                    children={
                                        <div className="border rounded-2 relative flex justify-content-end align-items-center" style={{ width: 423, height: 38 }}>
                                            <p className="px-2" style={{ marginTop: 8, fontSize: 14, color: '#8A8A8A' }}>Upload Foto Mobil</p>
                                            <i className="fa fa-upload" style={{ position: 'absolute', right: 15, bottom: 11 }} />
                                        </div>
                                    }
                                />
                            </div>
                            {preview && <div>
                                <div>
                                    <img width={500} src={preview} alt='pict-alt' />
                                </div>
                            </div>}
                            <div className="d-flex gap-4 align-items-center">
                                <label style={{ width: '135px' }}>Kategori</label>
                                <Input onChange={onchange} name='category' className="w-50" value={state?.category} />
                            </div>
                        </Col>
                    </Row>
                    <div className="mt-4 d-flex gap-3">
                        <Button onClick={() => navigate('/car')} type="button" size="sm" style={{ background: '#FFF', color: '#0D28A6' }}>Cancel</Button>
                        <Button type="submit" size="sm" style={{ background: '#0D28A6' }}>Save</Button>
                    </div>
                </div>
            </form>
        </div>
    )
};
export default CarForm;