import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AuthForm from '../../auth/auth-form/auth-form';
import AvailablePlayers from '../../player/available-players/available-players';
import Teams from '../../team/teams/teams';
import Modal from '../../UI/modal/modal';
import PlayerDetails from '../../player/player-details/player-details';
import TeamDetails from '../../team/team-details/team-details';

const Dashboard = () => {
  
  const { authorized, filteredPlayers, featuredPlayer, featuredTeam } = 
    useTypedSelector(({ auth, players, teams }) => ({
      authorized: auth.authorized,
      filteredPlayers: players.players.filter(({ name }) => name.toLowerCase().includes(players.searchTerm.toLowerCase())),
      featuredPlayer: players.featuredPlayer,
      featuredTeam: teams.featuredTeam,
  }));
  
  const { fetchPlayers, unsetFeaturedPlayer, unsetFeaturedTeam } = useActions();

  const playerModalCloseHandler = () => {
    unsetFeaturedPlayer();
  }

  const teamModalCloseHandler = () => {
    unsetFeaturedTeam();
  }

  useEffect(() => {
    if (authorized) {
      fetchPlayers();
    }
  }, [authorized, fetchPlayers])

  return (
    <main>
      {!authorized ? 
        <AuthForm /> : 
        <section>
          <Teams />
          <br />
          <AvailablePlayers players={filteredPlayers} />
          {featuredPlayer && <Modal onClose={playerModalCloseHandler}><PlayerDetails player={featuredPlayer}/></Modal>}
          {featuredTeam && <Modal onClose={teamModalCloseHandler}><TeamDetails team={featuredTeam}/></Modal>}
        </section>
      }
    </main>
  )
}

export default Dashboard;