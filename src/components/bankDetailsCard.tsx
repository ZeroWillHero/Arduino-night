import people from '../assets/images/people.jpg';
import comBank from '../assets/images/com.jpg';
export default function BankDetailsCard() {
    return (
        <div>
            <h2 className=" text-2xl md:text-3xl text-fuchsia-200 mb-6 text-center drop-shadow font-bold">
                Bank Details (Registration fee - 200/=) <span className="text-green-400">💳</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-fuchsia-100 items-center justify-center">
                <table className='table-auto w-full text-left border-collapse'>
                    <tr>
                        <td>
                            <img src={people} className='h-20 mb-5' alt="" />
                        </td>
                    </tr>

                    <tr className='p-3'>
                        <tr><strong>278200100068231</strong></tr>
                        <tr><strong>P A L Prasad</strong></tr>
                        <tr><strong>Peoples Bank</strong></tr>
                        <tr><strong>Nittambuwa</strong></tr>
                    </tr>
                </table>

                <table className='table-auto w-full text-left border-collapse'>
                    <tr>
                        <td>
                            <img src={comBank} className='h-20 mb-5' alt="" />
                        </td>
                    </tr>

                    <tr className='p-3'>
                        <tr><strong>8012937529</strong></tr>
                        <tr><strong>P A L Prasad</strong></tr>
                        <tr><strong>Commercial Bank</strong></tr>
                        <tr><strong>Nittambuwa</strong></tr>
                    </tr>
                </table>
            </div>
        </div>
    )
}