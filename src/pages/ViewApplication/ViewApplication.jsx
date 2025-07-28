import axios from "axios";
import { useLoaderData, useParams } from "react-router";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleChangeStatus = (e, app_id) => {
    const newStatus = e.target.value;

    axios.patch(`https://job-pilot-server-pf92.vercel.app/applications/${app_id}`, { status: newStatus })
      .then((res) => {
        console.log("PATCH result:", res.data);
        const { matchedCount, modifiedCount } = res.data;
        if (modifiedCount > 0) {
          toast.success("Status updated successfully");
        } else if (matchedCount > 0) {
          toast("Status was already up to date");
        } else {
          toast.error("No matching application found");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!");
      });

  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 my-20">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <motion.h2
          className="font-semibold text-gray-600 text-2xl sm:text-3xl md:text-4xl"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Applicant Information
        </motion.h2>
        <motion.p
          className="text-gray-500 text-sm"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Result ({applications.length})
        </motion.p>
      </div>

      <div className="overflow-x-auto mt-6 rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">No.</th>
              <th className="px-4 py-3 text-left">Applicant</th>
              <th className="px-4 py-3 text-left">Job Title</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.map((app, index) => (
              <motion.tr
                key={app._id}
                whileHover={{ backgroundColor: "#f9fafb" }}
                transition={{ duration: 0.2 }}
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{app.applicant}</td>
                <td className="px-4 py-3">{app.title || "N/A"}</td>
                <td className="px-4 py-3">
                  <select
                    onChange={e => {
                      if (e.target.value !== app.status) {
                        handleChangeStatus(e, app._id);
                      } else {
                        toast("No change made");
                      }
                    }}
                    defaultValue={app.status}
                    className="select select-bordered select-sm w-full max-w-xs"
                  >
                    <option disabled>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
