import { Button, Col, Row } from "reactstrap"
import Car from '../../assets/images/default.car.png';
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns'
import { useNavigate } from "react-router";
import ic_delete from '../../assets/images/logo.delete.png';

const convertMoney = (number = 0) => {
    const idr = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
        number,
    )
    return idr
}
const ListCar = (props) => {
    const [data, setdata] = useState(null);
    const navigate = useNavigate();
    const [open, setopen] = useState(false);
    const [sendId, setSendId] = useState(null);
    const fetchApi = () => {
        axios.get('https://api-car-rental.binaracademy.org/admin/v2/car', {
            params: {
                page: 1,
                // pageCount:
                pageSize: 10

            },
            headers: {
                access_token: localStorage?.getItem('TOKEN')
            }
        }).then(result => {
            setdata(result?.data?.cars);
        })
    }
    useEffect(() => {
        fetchApi()
    }, [])

    if (!data) return <div>Loading...</div>
    return (
        <div>
            <div className="d-flex justify-content-between mb-4">
                <h4>{props.title}</h4>
                <Button onClick={() => navigate('/car/form')} type="button" className="d-flex align-items-center gap-2" style={{
                    background: '#0D28A6'
                }}><i className="fa fa-plus" />Add New Car</Button>
            </div>
            <div className="d-flex gap-4 mb-4">
                <Button type="button" className="d-flex align-items-center gap-2" style={{
                    background: '#FFF',
                    color: '#AEB7E1'
                }}>All</Button>
                <Button type="button" className="d-flex align-items-center gap-2" style={{
                    background: '#FFF',
                    color: '#AEB7E1'
                }}>2-4people</Button>
                <Button type="button" className="d-flex align-items-center gap-2" style={{
                    background: '#FFF',
                    color: '#AEB7E1'
                }}>4-6 People</Button>
                <Button type="button" className="d-flex align-items-center gap-2" style={{
                    background: '#FFF',
                    color: '#AEB7E1'
                }}>6-8 People</Button>
            </div>
            <div>
                <Row className="gap-y-2">
                    {
                        data?.map((item, index) => {
                            return (
                                <Col lg={4} key={index} className="gy-4">
                                    <div className="bg-white p-4 border-1 rounded-3 shadow-sm" style={{
                                        background: 'white',
                                        width: '100%',
                                    }}>
                                        <img src={item.image ?? Car} alt='picimages' style={{ width: '100%', height: 210 }} />
                                        <div className="d-flex flex-column gap-2">
                                            <h4 style={{ fontSize: '14px', fontWeight: 'normal' }}>{item.name ?? 'Unindetify car'}</h4>
                                            <h4 style={{ fontSize: '14px', fontWeight: '700' }}>{convertMoney(item?.price)} / Hari</h4>
                                            <span className="d-flex align-items-center gap-1" style={{ fontSize: '14px', fontWeight: 'normal' }}>
                                                <i className="fa fa-users" />
                                                6-8
                                            </span>
                                            <span className="d-flex align-items-center gap-1" style={{ fontSize: '14px', fontWeight: 'normal' }}>
                                                <i className="fa fa-calendar-day" />
                                                Updated at {format(new Date(item?.updatedAt), "eee, dd MMM yyyy HH:mm ")}
                                            </span>
                                        </div>
                                        <div className="d-flex gap-4 w-100 pt-3">
                                            <Button onClick={() => {
                                                setopen(!open)
                                                setSendId(item?.id)
                                            }} className="w-100 d-flex gap-2 align-items-center justify-content-center" size="md" color="danger" outline>
                                                <i className="fa fa-trash" />
                                                Delete
                                            </Button>
                                            <Button type="button" onClick={() => navigate(`/car/${item.id}/edit`)} className="w-100 d-flex gap-2 align-items-center justify-content-center" size="md" color="success">
                                                <i className="fa fa-edit" />
                                                Edit
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
            <ModalDelete open={open} setopen={setopen} id={sendId} refetch={() => { fetchApi() }} />
        </div>
    )
}

const ModalDelete = ({ open, setopen, id, refetch }) => {
    const navigate = useNavigate();
    const removeApi = () => {
        axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, {
            headers: {
                access_token: localStorage?.getItem('TOKEN')
            }
        }).then(() => {
            navigate('/car');
            setopen(false);
            document.body.style.overflow = '';
            refetch();
        })
    }
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        }

    }, [open]);
    if (!open) return <div />;
    return (
        <div className="position-fixed w-100" style={{
            background: '#0000004a',
            height: '100vh',
            left: 0,
            top: '0',
        }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="h-50 w-25 bg-white d-flex flex-column gap-2 text-center justify-content-center align-items-center">
                    <img src={ic_delete} alt='remove-pict' />
                    <h4 style={{ fontSize: 16 }}>Menghapus Data Mobil</h4>
                    <p style={{ font: 14 }}>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
                    <div className="d-flex px-5 gap-3 w-100">
                        <Button onClick={removeApi} size="sm" className="w-100" style={{ color: 'white', background: '#0D28A6' }} type="button">ya</Button>
                        <Button onClick={() => {
                            setopen(!open);
                            document.body.style.overflow = ''
                        }} size="sm" className="w-100" style={{ color: '#0D28A6', background: 'white', border: '1px solid #0D28A6' }} type="button">Tidak</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCar;