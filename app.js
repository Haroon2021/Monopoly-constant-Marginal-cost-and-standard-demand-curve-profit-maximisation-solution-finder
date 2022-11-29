const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const linesData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const linesDataTransformed = Object.fromEntries(linesData);

    // Picking out the SUVAT values from the transformed data 
    const a = parseFloat(linesDataTransformed['a']);
    const b = parseFloat(linesDataTransformed['b']);
    const c = parseFloat(linesDataTransformed['c']);
    const d = parseFloat(linesDataTransformed['d']);
    const qmax = (a-c)/(2*b);
    const qmaxrev = a/(2*b);
    
    
    if ((a>0) ||(b>0) || (c>0)|| (d>=0) ) {
        
        document.querySelector(".errorhanger").innerText = ``
        document.querySelector(".answer").innerText = `
        The equations above are as follows:
        Demand curve:
        P = ${a} - ${b}Q
        Cost function:
        TC(Q) = ${c}Q+ ${d}

        Profit = TR - TC
        Profit = P*Q - (cQ+ d)
        Profit = (${a} - ${b}Q)*Q - (${c}Q+ ${d})
        Profit = ${a}Q - ${b}Q^2 - ${c}Q -${d}
        Profit = ${a}Q - ${b}Q^2 - ${c}Q -${d}
        Profit = -${b}Q^2 + ${a-c}Q -${d}

        Differentiate with respect to Q, also call profit p

        dp/dq = -2*${b}Q + ${a-c}

        Set dp/dq = 0 and solve yeilds:

        0 = -2*${b}Q + ${a-c}
        2*${b}Q = ${a-c}
        ${2*b}Q = $${a-c}
        Q = ${(a-c)/(2*b)}

        The price relating to this quantity is:

        P = ${a} - ${b}Q
        P = ${a} - ${b*qmax}
        P = ${a - (b*qmax) }
        
        The profit relating to this quantity is:

        Profit = -${b}Q^2 + ${a-c}Q -${d}
        Profit = -${b}${qmax}^2 + ${a-c}${qmax} -${d}
        Profit = ${(-1)*b}${qmax*qmax} + ${(a-c)*qmax} -${d}
        Profit = ${((-1)*b) *(qmax*qmax)} + ${ ((a-c)*qmax) - d} 
        Profit = ${  (((-1)*b) *(qmax*qmax)) + (((a-c)*qmax) - d) }

        ___________________________

        Suppose instead we wanted to maximise Total Revenue (lets call Total Revenue R)
        TR = PQ
        R = (a - bQ)Q
        R = (${a} - ${b}Q)Q
        R = ${a}Q - ${b}Q^2

        Differentiate with respect (wrt) Q to get:

        dR/dQ = ${a} -2*${b}Q

        Set dR/dQ = 0 and solve for Q:

        0 = ${a} -2*${b}Q
        ${a} = 2*${b}Q
        ${2*b}Q = ${a}
        Q= ${a/(2*b)}

        The above Quantity produced maximises revenue.
        The corresponding revenue for the quantity above is:

        
        R = (a - bQ)Q
        R = (${a} - ${b}Q)Q
        R = (${a} - ${b}${qmaxrev})*${qmaxrev}
        R = (${a} - ${b*qmaxrev})*${qmaxrev}
        R = (${a- (b*qmaxrev)})*${qmaxrev}
        R = ${ (a- (b*qmaxrev)) *(qmaxrev)}

        `
 
    } else {

        document.querySelector(".errorhanger").innerText = `Please insert appropiate values for a, b, c and d`       

    }


}
)