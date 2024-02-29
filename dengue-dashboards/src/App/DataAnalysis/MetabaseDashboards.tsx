import { dataService } from "./APIFetch";
import ApiGET from "../../Core/APIHandlers/ApiGET";
import MetabaseEmbedding from "./MetabaseEmbedding";

export default function MetabaseDashboards() {

    const dataURL = dataService

    return (
        <div>
            <ApiGET url={dataURL} />
            <MetabaseEmbedding />
        </div>
    )
}