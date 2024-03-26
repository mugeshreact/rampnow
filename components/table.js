import React, { useCallback, useEffect, useState } from 'react';
import Pagination from './Pagination/index';
import { useRouter } from 'next/router';
import axios from 'axios';

const Table = () => {
    const router = useRouter()
    const [activePage, setActivePage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [data, setData] = useState([])

    const updatePaginationStatus = useCallback((currentPage) => {
        setActivePage(currentPage);
    }, []);

    const fetchList = async () => {
        try {
            const response = await axios.get(`http://fe-test.dev.rampnow.io:8000/api/books?page=${activePage}&limit=${limit}`);
            setData(response.data.data);
        } catch (error) {
            console.error(error, "getData");
        }
    }

    useEffect(() => {
        // if (refetch) {
        fetchList()
        // }
    }, [activePage, limit])

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-800">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-800 text-white">ID</th>
                        <th className="px-4 py-2 bg-gray-800 text-white">Author</th>
                        <th className="px-4 py-2 bg-gray-800 text-white">Country</th>
                        <th className="px-4 py-2 bg-gray-800 text-white">Language</th>
                        <th className="px-4 py-2 bg-gray-800 text-white">Link</th>
                        <th className="px-4 py-2 bg-gray-800 text-white">Pages</th>
                        <th className="px-4 py-2 bg-gray-800 text-white">Title</th>
                        <th className="px-4 py-2 bg-gray-800 text-white">Year</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {/* Map over the displayed items to render rows */}
                    {data.map(item => (
                        <tr key={item.id} className="border border-gray-800">
                            <td className="px-4 py-2">{item.id + 1}</td>
                            <td className="px-4 py-2">{item.author}</td>
                            <td className="px-4 py-2">{item.country}</td>
                            <td className="px-4 py-2">{item.language}</td>
                            <td className="px-4 py-2">{item.link}</td>
                            <td className="px-4 py-2">{item.pages}</td>
                            <td className="px-4 py-2">{item.title}</td>
                            <td className="px-4 py-2">{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div className='d-flex justify-content-center'>
                
                <Pagination
                    totalPages={totalPages}
                    activePage={activePage}
                    onPageChange={handlePageChange}
                />
               
                <div>
                    Page {activePage} of {totalPages}
                </div>
            </div> */}
            <div className='d-flex justify-content-between mt-4'>
                <div></div>
                <Pagination
                    totalCount={50}
                    onChange={updatePaginationStatus}
                    siblingCount={2}
                    currentPage={1}
                    pageSize={10}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />

                <div>
                    Show results
                    <select onChange={(e) => setLimit(e.target.value)}>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Table;
