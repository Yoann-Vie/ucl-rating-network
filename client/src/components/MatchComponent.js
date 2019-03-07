import React, { Component } from 'react';
import "./css/MatchComponent.css"; 
import { Button } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, Table} from 'reactstrap';
import classnames from 'classnames';
import Modal from "./ModalComponent";


class MatchComponent extends React.Component {
        constructor(props) {
          super(props);
      
          this.state = {
            activeTab: '1',
            match: {},
            modalOpen: false
          };

          this.toggle = this.toggle.bind(this);
          this.triggerModal = this.triggerModal.bind(this);
        }
      
        toggle(tab) {
          if (this.state.activeTab !== tab) {
            this.setState({
              activeTab: tab
            });
          }
        }

        triggerModal(){
            this.setState(prevState => ({
                modalOpen: !prevState.modalOpen
            }));
        }

    render() {
        return (
          <div className="App">
            <Modal isOpen={this.state.modalOpen} match={this.state.match} onCancel={this.triggerModal}/>
            <div>
                <Nav tabs>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    >
                    Saisons 2015-2016
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    >
                    Saisons 2016-2017
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                    >
                    Saisons 2017-2018
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Row>
                    <Col sm="11">
                    <Card body >
                        <CardTitle>Journée 1 </CardTitle>
                        <Table hover>
                            <thead>
                            <tr>                            
                                <th className="Domicile"  >Domicile</th>
                                <th className="col-4">Score</th>
                                <th className="Exterieur">Extérieur</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr onClick={this.triggerModal}  >                              
                                <td className="Domicile">PSG</td>
                                <td>5 - 0</td>
                                <td className="Exterieur">Manchester United</td>
                            </tr>
                            <tr onClick={this.triggerModal}>                              
                                <td className="Domicile">Real</td>
                                <td>1 - 4</td>
                                <td className="Exterieur">Ajax</td>
                            </tr>
                            <tr onClick={this.triggerModal}>                              
                                <td className="Domicile">Barcelone</td>
                                <td>0 - 4</td>
                                <td className="Exterieur">Qarabag</td>
                            </tr>
                            </tbody>
                        </Table>       
                        </Card>   
                        
                        <Card body >
                        <CardTitle>Journée 2 </CardTitle>
                        <Table hover>
                            <thead>
                            <tr>                      
                                <th className="Domicile">Domicile</th>
                                <th className="col-4">Score</th>
                                <th className="Exterieur">Extérieur</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr onClick={this.triggerModal}>                              
                                <td className="Domicile">PSG</td>
                                <td>5 - 0</td>
                                <td className="Exterieur">Manchester United</td>
                            </tr>
                            <tr onClick={this.triggerModal}>                              
                                <td className="Domicile">Real</td>
                                <td>1 - 4</td>
                                <td className="Exterieur">Ajax</td>
                            </tr>
                            <tr onClick={this.triggerModal}>                              
                                <td className="Domicile">Barcelone</td>
                                <td>0 - 4</td>
                                <td className="Exterieur">Qarabag</td>
                            </tr>
                            </tbody>
                        </Table>       
                        </Card>                      
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                    <Col sm="11" >
                        
                    </Col>
            
                    </Row>
                </TabPane>

                <TabPane tabId="3">
                    <Row>
                    <Col sm="11" >
                        <Card body >
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                        <Card body >
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                        <Card body >
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                        
                    </Col>
            
                    </Row>
                </TabPane>
                </TabContent>
            </div>


  
            



               
               

          </div>
        );
      }

}
export default MatchComponent;