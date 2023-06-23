import React from "react";

function TableRow({patients}) {

  const startDate=new Date(patients.startDate).toLocaleDateString('en-GB')
  const endDate=new Date(patients.endDate).toLocaleDateString('en-GB')
   
   function statusColorChanger(status){
    let commonStyle='text-black rounded-2xl'  
 
    switch(status){
      case 'Ready':
        return 'bg-[#89FFAA] '+commonStyle;
      case 'Partial Report':
        return 'bg-[#E7F880] '+commonStyle;
      case 'Lab dropped':
        return 'bg-[#F2A38A] '+commonStyle
      default:
        return ''
    }


   }


  return (
    
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap text-black px-6 py-4 font-medium">{patients.orderNo}</td>
        <td className="whitespace-nowrap text-black px-6 py-4">{startDate}</td>
        <td className="whitespace-nowrap text-black px-6 py-4">{patients.patientName}</td>
        <td className="whitespace-nowrap text-black px-6 py-4">{patients.hospitalId}</td>
        <td className="whitespace-nowrap text-black px-6 py-4">{patients.testName}</td>
        <td className="whitespace-nowrap text-black px-6 py-4">{patients.doctor}</td>
        <td className="whitespace-nowrap text-black px-6 py-4">{endDate}</td>
        {
          
        }
        <td >
          <div className={statusColorChanger(patients.status)}>
            <h3 className="text-center">{patients.status} </h3>
           
          </div>
          
          
          </td>
        <td className="whitespace-nowrap px-6 py-4 flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-800">
     <path fillRule="evenodd" d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z" clipRule="evenodd" />
     <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
     </svg>

     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-800 ml-2">
  <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
</svg>


        </td>
      </tr>
     
    </>
  );
}

export default TableRow;
