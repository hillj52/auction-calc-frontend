import { MouseEvent } from 'react';
import TeamCard from '../team-card/team-card';
import Button from '../../UI/button/button';
import { useState } from 'react';
import Modal from '../../UI/modal/modal';
import AddTeamForm from '../add-team-form/add-team-form';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useEffect } from 'react';

const Teams: React.FC = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const { teams, moneyRemaining, valueRemaining, inflation } = useTypedSelector(({ teams, players }) => {
    return {
      teams: teams.teams,
      moneyRemaining: teams.teams.reduce((acc, { money }) => acc += money, 0),
      valueRemaining: players.players.reduce((acc, { value, drafted }) => {
        if (!drafted) {
          return acc + value;
        } else {
          return acc;
        }
      }, 0),
      inflation: players.inflation,
    }
  });

  const { addTeam, fetchTeams } = useActions();

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams])

  const addTeamClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalOpen(true);
  }

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  const modalSubmitHandler = ({ teamName, teamOwner }: { teamName: string, teamOwner: string}) => {
    addTeam({ name: teamName, owner: teamOwner });
    setModalOpen(false);
  }

  return (
    <section>
      <Button primary onClick={addTeamClickHandler}>Add Team</Button>
      <span>Total Money Remaining: ${moneyRemaining} Total Value Remaining: ${valueRemaining} * {inflation} = ${valueRemaining * inflation} </span>
      <div>
        {teams.map(team => (<TeamCard key={team.id} team={team}/>))}
      </div>
      {modalOpen ? <Modal onClose={modalCloseHandler}><AddTeamForm onSubmit={modalSubmitHandler} onCancel={modalCloseHandler}/></Modal> : null}
    </section>
  )
}

export default Teams;