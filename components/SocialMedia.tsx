import React from 'react';
import tw from 'twin.macro';

const SocialMedia = () => {
  const social = [
    {
      network: 'Instagram',
      visitors: '3550',
      progress: <Bar style={{ width: '71%' }} />,
      id: 1,
    },
    {
      network: 'Twitter',
      visitors: '1798',
      progress: <Bar style={{ width: '39.6%' }} />,
      id: 2,
    },
    {
      network: 'Facebook',
      visitors: '1245',
      progress: <Bar style={{ width: '24.9%' }} />,
      id: 3,
    },
    {
      network: 'TikTok',
      visitors: '986',
      progress: <Bar style={{ width: '19.7%' }} />,
      id: 4,
    },
    {
      network: 'Pinterest',
      visitors: '854',
      progress: <Bar style={{ width: '17%' }} />,
      id: 5,
    },
    {
      network: 'VK',
      visitors: '650',
      progress: <Bar style={{ width: '13%' }} />,
      id: 6,
    },
    {
      network: 'Pinterest',
      visitors: '480',
      progress: <Bar style={{ width: '8.4%' }} />,
      id: 7,
    },
  ];
  return (
    <Div>
      <Head>Social Media Traffic</Head>
      <table className="w-full table-auto">
        <HeadTable>
          <tr>
            <Tablehead>NETWORK</Tablehead>
            <Tablehead>VISITORS</Tablehead>
          </tr>
        </HeadTable>
        <tbody>
          {social.map((item) => (
            <tr
              className="border dark:border-[#243049] border-gray-200"
              key={item.id}
            >
              <td className="text-left px-6  py-3">{item.network}</td>
              <td className="text-left pl-6  py-3">{item.visitors}</td>
              <td className="text-left px-6 py-3 flex items-center">
                <ProgressBar>{item.progress}</ProgressBar>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Div>
  );
};

export default SocialMedia;
const Div = tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
h-auto
mt-4
md:mt-0
`;
const Head = tw.p`
px-6
py-3
text-[#1d273b]
font-medium
dark:text-white
`;
const Tablehead = tw.th`
py-2
pl-6
w-[8.7%]
pr-3
`;
const HeadTable = tw.thead`
text-[#616876]
text-[10px]
bg-[#f8fafc]
font-medium
border-b
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234]
text-left
w-full
`;
const Bar = tw.div`
bg-blue-600 
border-l-0
h-2
rounded-r-none
rounded-full
`;
const ProgressBar = tw.div`
w-full
bg-gray-200
flex
rounded-full
h-2
dark:bg-gray-700
align-middle
`;
