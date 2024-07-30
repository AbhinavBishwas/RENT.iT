
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import profile from '../assets/profile1.png'
const SideBar = () => {
  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={profile} imgAlt="Flowbite logo" className="text-gray-700">
        ABHINAV
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-book" icon={HiOutlineCloudUpload}>
            Upload-Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-product" icon={HiOutlineCloudUpload}>
            Upload-Product
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-book" icon={HiInbox}>
            Manage-Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-product" icon={HiInbox}>
            Manage-Product
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar
