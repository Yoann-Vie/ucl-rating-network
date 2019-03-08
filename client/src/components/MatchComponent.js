import React from 'react';
import "./css/MatchComponent.css"; 
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Col, Table} from 'reactstrap';
import classnames from 'classnames';
import Modal from "./ModalComponent";
import HeaderComponent from './HeaderComponent';
import fetchData from "../functions/fetchFunction";


class MatchComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: '2018',
        match: {},
        round: {},
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

        fetchData("GET", "rounds?year=" + year, localStorage.getItem('token'))
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

    triggerModal(match, round){
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
            match: match,
            round: round
        }));
    }

    render() {
        let rounds = this.state.rounds.map((round, key) => {
            let matches = ''
            if (typeof round.matches !== 'undefined' && round.matches.length > 0) {
                matches = round.matches.map((match, key) => {
                    return (
                        <tr onClick={ () => this.triggerModal(match, round.name) } key={key}>
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
                <div key={key}>
                    <Col sm="11">
                        <Card body >
                            <CardTitle>{ round.name }</CardTitle>
                            <Table hover>
                                <thead>
                                <tr>
                                    <th className="Domicile col-4">Domicile</th>
                                    <th className="col-4">Score</th>
                                    <th className="Exterieur col-4">Extérieur</th>
                                </tr>
                                </thead>
                                <tbody>
                                { matches }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </div>
            )
        })

        return (
            <div className="App">
                <HeaderComponent />
                <Modal isOpen={this.state.modalOpen}
                       match={this.state.match}
                       year={this.state.activeTab}
                       round={this.state.round}
                       onCancel={this.triggerModal}
                />
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