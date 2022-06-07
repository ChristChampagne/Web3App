// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  // core components
  import LungAnalysisSend from "components/Headers/LungAnalysisSend";
  
  const LungsSend = () => {
    return (
      <>
        <LungAnalysisSend />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="12">
                      <h3 className="mb-0">Send information to patient</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h1 className="text-muted mb-4">
                      General result: Normal lungs
                    </h1>
  
                    <hr></hr>
  
                    <h2 className="text-muted mb-4">
                    Accuracy percentage: 69%
                    </h2>
  
                      <Button
                        color="primary"
                        href=""
                        onClick={(e) => e.preventDefault()}
                        size="md"
                      >
                        Send
                      </Button>
  
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default LungsSend;
  