import { Button, Col, Row } from "reactstrap"
import Car from '../../assets/images/default.car.png';
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns'
import { useNavigate } from "react-router";

const convertMoney = (number = 0) => {
    const idr = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
        number,
    )
    return idr
}
const ListCar = (props) => {
    const [data, setdata] = useState(null);
    const navigate = useNavigate();
    const fetchApi = () => {
        axios.get('https://api-car-rental.binaracademy.org/admin/v2/car', {
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
                                        <img src={item.image ?? Car} alt='picimages' style={{ width: '100%' }} />
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
                                            <Button className="w-100 d-flex gap-2 align-items-center justify-content-center" size="md" color="danger" outline>
                                                <i className="fa fa-trash" />
                                                Delete
                                            </Button>
                                            <Button className="w-100 d-flex gap-2 align-items-center justify-content-center" size="md" color="success">
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
        </div>
    )
}

export default ListCar;