import React from 'react';
import "./css/MatchComponent.css"; 
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Row, Col, Table} from 'reactstrap';
import classnames from 'classnames';
import Modal from "./ModalComponent";
<<<<<<< HEAD
import Form from "./FormComponent";
=======
import HeaderComponent from './HeaderComponent';

>>>>>>> master

class MatchComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: '2018',
        match: {},
        rounds: [],
        modalOpen: false
      };

      this.toggle = this.toggle.bind(this);
      this.triggerModal = this.triggerModal.bind(this);
    }

    componentDidMount() {
        this.refreshRounds()
    }

    refreshRounds(year = '2018') {
        fetch('http://127.0.0.1:3000/rounds?year=' + year, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                rounds: data
            })
        })
    }

    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
        this.refreshRounds(tab)
      }
    }

    triggerModal(match){
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
            match: match
        }));
    }

    render() {
        let rounds = this.state.rounds.map((round) => {
            let matches = ''
            if (typeof round.matches !== 'undefined' && round.matches.length > 0) {
                matches = round.matches.map((match) => {
                    return (
                        <tr onClick={ () => this.triggerModal(match) }  >
                            <td className="Domicile">
                                <img className={'team-picto'} src={'/images/logos/' + match.team1.key + '.png' } alt={match.team1.name + ' logo'}/>
                                { match.team1.name }
                            </td>
                            <td>{ match.score1 } - { match.score2 }</td>
                            <td className="Exterieur">
                                { match.team2.name }
                                <img className={'team-picto'} src={'/images/logos/' + match.team2.key + '.png' } alt={match.team2.name + ' logo'}/>
                            </td>
                        </tr>
                    )
                })
            }

            return (
                <div>
                    <Row>
                        <Col sm="11">
                            <Card body >
                                <CardTitle>{ round.name }</CardTitle>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th className="Domicile">Domicile</th>
                                            <th className="col-4">Score</th>
                                            <th className="Exterieur">Extérieur</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { matches }
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        })

        return (
            <div className="App">
                <HeaderComponent />
                <Modal isOpen={this.state.modalOpen} match={this.state.match} onCancel={this.triggerModal}/>
                <div className="games">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2018' })}
                            onClick={() => { this.toggle('2018'); }}
                            >
                            Saisons 2017-2018
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2017' })}
                            onClick={() => { this.toggle('2017'); }}
                            >
                            Saisons 2016-2017
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2016' })}
                            onClick={() => { this.toggle('2016'); }}
                            >
                            Saisons 2015-2016
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="2018">{ rounds }</TabPane>
                        <TabPane tabId="2017">{ rounds }</TabPane>
                        <TabPane tabId="2016">{ rounds }</TabPane>
                    </TabContent>
                </div>     
            </div>
        );
      }

}
export default MatchComponent;