import DatabaseApiFetch from "./DatabaseApiFetch"
import MetabaseDashboard from "./MetabaseDasboards"

export default function MetabaseOutput() {

    return (
        <div>
            <MetabaseDashboard />
            <DatabaseApiFetch />
        </div>
    )
}