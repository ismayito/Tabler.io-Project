import React from 'react';
import tw from 'twin.macro';
import Actions from './Actions';
import { IconChevronUp } from '@tabler/icons';
import Link from 'next/link';
import Image from 'next/image';
import { BiRadioCircle } from 'react-icons/bi';
import { IconChevronLeft } from '@tabler/icons';
import { IconChevronRight } from '@tabler/icons';

const Invoices = () => {
  const invoices = [
    {
      input: <Input type="checkbox" />,
      num: '001401',
      sub: 'Design Works',
      client: 'Carlson Limited',
      vat: 87956621,
      date: '15 Dec 2017',
      status: 'Paid',
      price: '$887',
      action: <Actions />,
      flag: '/us.svg',
      icon: <BiRadioCircle />,
      text: 'paid',
    },
    {
      input: <Input type="checkbox" />,
      num: '001402',
      sub: 'UX Wireframes',
      client: 'Adobe',
      vat: 87956421,
      date: '12 Apr 2017',
      status: 'Pending',
      price: '$1200',
      action: <Actions />,
      flag: '/gb.svg',
      icon: <BiRadioCircle />,
      text: 'pending',
    },
    {
      input: <Input type="checkbox" />,
      num: '001403',
      sub: 'New Dashboard',
      client: 'Bluewolf',
      vat: 87952621,
      date: '23 Oct 2017',
      status: 'Pending',
      price: '$534',
      action: <Actions />,
      flag: '/de.svg',
      icon: <BiRadioCircle />,
      text: 'pending',
    },
    {
      input: <Input type="checkbox" />,
      num: '001404',
      sub: 'Landing Page',
      client: 'Salesforce',
      vat: 87953421,
      date: '2 Sep 2017',
      status: 'Due in 2 Weeks',
      price: '$1500',
      action: <Actions />,
      flag: '/br.svg',
      icon: <BiRadioCircle />,
      text: 'weeks',
    },
    {
      input: <Input type="checkbox" />,
      num: '001405',
      sub: 'Marketing Templates',
      client: 'Printic',
      vat: 87956621,
      date: '29 Jan 2018',
      status: 'Paid Today',
      price: '$648',
      action: <Actions />,
      flag: '/pl.svg',
      icon: <BiRadioCircle />,
      text: '',
    },
    {
      input: <Input type="checkbox" />,
      num: '001406',
      sub: 'Sales Presentation',
      client: 'Tabdaq',
      vat: 87956621,
      date: '4 Feb 2018',
      status: 'Due in 3 Weeks',
      price: '$300',
      action: <Actions />,
      flag: '/br.svg',
      icon: <BiRadioCircle />,
      text: 'weeks',
    },
    {
      input: <Input type="checkbox" />,
      num: '001407',
      sub: 'Logo & Print',
      client: 'Apple',
      vat: 87956621,
      date: '22 Mar 2018',
      status: 'Paid Today',
      price: '$2500',
      action: <Actions />,
      flag: '/us.svg',
      icon: <BiRadioCircle />,
      text: 'paid',
    },
    {
      input: <Input type="checkbox" />,
      num: '001408',
      sub: 'Icons',
      client: 'Tookapic',
      vat: 87956621,
      date: '13 May 2018',
      status: 'Paid Today',
      price: '$940',
      action: <Actions />,
      flag: '/pl.svg',
      icon: <BiRadioCircle />,
      text: 'paid',
    },
  ];
  return (
    <Div>
      <Head>Invoices</Head>
      <DivEntries>
        <Show>
          <p>Show</p>
          <Input
            type="number"
            placeholder="8"
            className="w-20 pl-1 mr-2"
          ></Input>
        </Show>
        <Entries>
          <p>entries</p>
          <Search>
            <p>Search:</p>
            <Input type="text"></Input>
          </Search>
        </Entries>
      </DivEntries>
      <table className="w-full table-auto">
        <Thead>
          <tr>
            <th className="pl-6 py-2">
              <input type="checkbox"></input>
            </th>
            <th>
              NO.
              <span className="inline-block">
                {' '}
                <IconChevronUp size={10}></IconChevronUp>
              </span>
            </th>
            <th>INVOICE SUBJECT</th>
            <th>CLIENT</th>
            <th>VAT NO.</th>
            <th>CREATED</th>
            <th>STATUS</th>
            <th>PRICE</th>
            <th></th>
          </tr>
        </Thead>
        <tbody>
          {invoices.map((item) => (
            <tr
              key={item.num}
              className="border dark:border-[#243049] border-gray-200 relative"
            >
              <TableData className="pl-6 py-4">{item.input}</TableData>
              <TableData>{item.num}</TableData>
              <TableData>
                <Link className="hover:underline" href="#">
                  {item.sub}
                </Link>
              </TableData>
              <TableData>
                <span className=" inline-block mr-1">
                  <Image
                    className="rounded-md"
                    width={18}
                    height={20}
                    src={item.flag}
                    alt="flag"
                  ></Image>
                </span>
                {item.client}
              </TableData>
              <TableData>{item.vat}</TableData>
              <TableData>{item.date}</TableData>
              <TableData>
                <BiRadioCircle
                  size={8}
                  className={`${
                    item.text == 'paid' &&
                    'bg-green-700 rounded-full text-green-700 mr-1'
                  }
                  ${
                    item.text == 'pending' &&
                    'bg-red-700 rounded-full text-red-700 mr-1'
                  }
                  ${
                    item.text == 'weeks' &&
                    'bg-gray-600 rounded-full text-gray-600 mr-1'
                  }
                  ${
                    item.text == '' &&
                    'bg-red-800 rounded-full text-red-800 mr-1'
                  } inline-block
                  `}
                ></BiRadioCircle>
                {item.status}
              </TableData>
              <TableData className="py-4 pr-3">{item.price}</TableData>
              <TableData className="text-left relative">
                {item.action}
              </TableData>
            </tr>
          ))}
        </tbody>
      </table>
      <DivPagination>
        <p className="">Showing 1 to 8 of the 16 entries</p>
        <DivPages>
          <Links aria-disabled="true" role="link" className="">
            <IconChevronLeft size={15} className="inline-block" />
            prev
          </Links>
          <LinkNum href="#">1</LinkNum>
          <LinkNum2 href="#">2</LinkNum2>
          <LinkNum href="#">3</LinkNum>
          <LinkNum href="#">4</LinkNum>
          <LinkNum href="#">5</LinkNum>
          <LinkNum href="#">
            next <IconChevronRight size={15} className="inline-block" />
          </LinkNum>
        </DivPages>
      </DivPagination>
    </Div>
  );
};

export default Invoices;

const Div = tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
h-auto
mt-4
w-full
overflow-x-scroll
md:max-md:overflow-x-scroll
lg:overflow-x-hidden
mx-1
`;

const Head = tw.p`
text-black
dark:text-white
px-6
py-4
border-b
border-gray-200
dark:border-[#243049]
`;
const DivEntries = tw.div`
px-6
py-4
flex
border-b
border-gray-200
dark:border-[#243049]
text-[#616876]
`;
const Show = tw.div`
flex
gap-2
`;
const Entries = tw.div`
w-full
flex
justify-between
`;
const Search = tw.div`
flex
gap-2
`;
const Input = tw.input`
border
border-gray-300
rounded 
focus:ring
focus:ring-blue-200
focus:outline-none
dark:bg-[#1a2234] 
dark:border-[#243049]
`;
const Thead = tw.thead`
text-[#616876]
text-[10px]
bg-[#f8fafc]
font-medium
border-b
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234]
text-left
`;

const DivPagination = tw.div`
md:flex
md:justify-between
gap-2
py-4
px-6
text-[#616876]
bg-[#f8fafc]
dark:bg-[#1a2234] 
dark:border-[#243049]
`;
const DivPages = tw.div`
flex
items-center
sm:justify-center
gap-1
`;
const Links = tw.a`
opacity-25
`;
const LinkNum = tw.a`
px-3
py-1
rounded-md
bg-white
hover:ring-4
hover:focus:ring-blue-200
`;
const LinkNum2 = tw.a`
px-3
py-1
rounded-md
bg-blue-700
hover:ring-4
hover:focus:ring-blue-200
text-white
`;
const TableData = tw.td`
py-3
pr-3
whitespace-nowrap

`;
