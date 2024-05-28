import { useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";

const fileTypes = ["JPG", "PNG", "GIF"];

const CarForm = (props) => {
    const [state, setState] = useState({
        name: '',
        price: '',
        category: '',
        status: false,
        image: ''
    });
    const onchange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleChange = (file) => {
        setState(prev => ({
            ...prev,
            image: file
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        axios.post('https://api-car-rental.binaracademy.org/admin/car', {
            ...state
        }, {
            headers: {
                access_token: localStorage?.getItem('TOKEN')
            }
        }).then(result=>console.log(result))
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
                                <Input onChange={onchange} name="name" className="w-50" />
                            </div>
                            <div className="d-flex gap-4 align-items-center">
                                <label style={{ width: '135px' }}>Harga</label>
                                <Input onChange={onchange} name="price" className="w-50" />
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
                            <div className="d-flex gap-4 align-items-center">
                                <label style={{ width: '135px' }}>Kategori</label>
                                <Input onChange={onchange} name='category' className="w-50" />
                            </div>
                        </Col>
                    </Row>
                    <div className="mt-4 d-flex gap-3">
                        <Button type="button" size="sm" style={{ background: '#FFF', color: '#0D28A6' }}>Cancel</Button>
                        <Button type="submit" size="sm" style={{ background: '#0D28A6' }}>Save</Button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default CarForm;