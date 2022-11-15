json = require("./numbers.json");

json.forEach((row) => {
    document.getElementById("body").innerHTML += `
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-8 my-3">
                 <div class="card p-0 mx-auto shadow-lg">
                    <div class="card-header p-1">
                        <h1>${row.number}</h1>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-9 d-flex align-items-center">
                                <input
                                    type="text"
                                    class="form-control"
                                    aria-label=""
                                    id="${row.number}"
                                    onchange="checkWord(${
                                        parseInt(row.number) - 1
                                    }); hasAttempted(${
        parseInt(row.number) - 1
    }); counterCheck(${parseInt(row.number) - 1})"
                                />
                            </div>
                            <div class="col-sm-3 p-3" id="img${row.number}">
                                <img
                                    src="./graphics/null.png"
                                    style="height: auto; width: auto"
                                />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12">
                                <button
                                    type="button"
                                    class="btn btn-outline-dark w-100"
                                    onclick="revealWord(${
                                        parseInt(row.number) - 1
                                    })"
                                    id="btn${row.number}"
                                >
                                    Reveal Word
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});
