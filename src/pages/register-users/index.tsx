// Components
import Category from '../../components/extras-components/category'
import TableRegisterUsers from '../../components/tables/table-register-users'
import PageTitle from '../../components/titles/page-title' 
import WhiteBackground from '../../components/extras-components/white-background'

// Service
import { getCounterTotalUsers, getRegisterUsers } from '../../services/users-service/config'

// Hooks
import { useEffect, useState } from 'react'
import SearchAndTotal from '../../components/register-users-components/search-and-total'
import Pagination from '../../components/extras-components/pagination'

// ---

const RegisterUsersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | 'Médicos' | 'Contratantes'>('Todos');

  const [allUsers, setAllUsers] = useState<RegisteredUserData[]>([]);
  console.log(allUsers)

  const [totalUsers, setTotalUsers] = useState(0);
  const [allDoctors, setAllDoctors] = useState(0);
  const [allContractors, setAllContractors] = useState(0);

  const [page, setPage] = useState(0); 
  const [totalPages, setTotalPages] = useState(0); 

  const handleCategoryChange = (category: 'Todos' | 'Médicos' | 'Contratantes') => {
    setSelectedCategory(category);
  };
  
  const handlePageChange = () => {
    setPage(0);
  };

  useEffect(() => {
    const counterAllUsers = async () => {
      const allUsersData = await getCounterTotalUsers();
      if (allUsersData) {
        setTotalUsers(allUsersData.total);
        setAllDoctors(allUsersData.totalDoctors);
        setAllContractors(allUsersData.totalContractor);
      }
    };
  
    const getAllUsers = async () => {
      const response = await getRegisterUsers(page);
      if (response) {
        setAllUsers(response.content); 
        setTotalPages(response.totalPages); 
      }
    };
  
    getAllUsers();
    counterAllUsers();
  }, [selectedCategory, page]);

  return (
    <>
      <PageTitle title="Usuários Cadastrados |" category={selectedCategory} />
      <div style={{ display: 'flex', marginLeft: '15px' }}>
        <Category name="Todos" total={totalUsers} onCategoryChange={() => handleCategoryChange('Todos')} />
        <Category name="Contratantes" total={allContractors} onCategoryChange={() => handleCategoryChange('Contratantes')} />
        <Category name="Médicos" total={allDoctors} onCategoryChange={() => handleCategoryChange('Médicos')} />
      </div>
      <WhiteBackground>
        <SearchAndTotal
          counter={selectedCategory === 'Todos' ? totalUsers : selectedCategory === 'Contratantes' ? allContractors : selectedCategory === 'Médicos' ? allDoctors : 0}
        />
        <TableRegisterUsers selectedCategory={selectedCategory}/>

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </WhiteBackground>
    </>
  );
};

export default RegisterUsersPage