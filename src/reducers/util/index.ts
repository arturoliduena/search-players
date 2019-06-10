import { IFilterDate, Iplayer } from '../../constants/playerTypes'
export const getAge = (dateString: string) => {
  const today = new Date();
  const formatDate = dateString.replace(/-/g, '/')
  const birthDate = new Date(formatDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export const search = (data: IFilterDate, playes: Iplayer[]) => {
  const { name, position, age } = data;
  const filteredPlayers = playes.filter(player => {
    const filterByName = name ? player.name.toLowerCase().includes(name.toLowerCase()) : true;
    const filterByPosition = position === 'none' ? true : player.position === position;
    const filterByAge = age ? player.age === age : true;
    return filterByName && filterByAge && filterByPosition;
  })
  return filteredPlayers
}
