import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';
const CardUsers = ({ username, lastname, image, email }) => {
    return (
        <Card
            style={{
                width: '100%'
            }}
        >
            <img
                alt="Sample"
                src={image}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {username}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {lastname}
                </CardSubtitle>
                <CardText>
                    {email}
                </CardText>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button color='danger' size='sm'>
                        Delete
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
};
export default CardUsers;
