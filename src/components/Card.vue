<template>
    <div class="container">
        <br />
        <h4 style="margin-top: 30px">
            Car Showroom To Display The Most Beautiful And Best Cars.
        </h4>
        <br />
        <div class="row" id="ads" style="margin-top: 20px">
            <!-- Category Card -->
            <div class="col-md-4" style="margin-top: 15px">
                <div class="card rounded">
                    <div class="card-image">
                        <span class="card-notify-badge">Low KMS</span>
                        <span class="card-notify-year">2018</span>
                        <img
                            class="img-fluid"
                            src="../assets/bac.jpg"
                            alt="Alternate Text"
                        />
                    </div>
                    <div class="card-image-overlay m-auto">
                        <span class="card-detail-badge">Used</span>
                        <span class="card-detail-badge">$28,000.00</span>
                        <span class="card-detail-badge">13000 Kms</span>
                    </div>
                    <div class="card-body text-center">
                        <div class="ad-title m-auto">
                            <h5>Honda Accord LX</h5>
                        </div>
                        <a class="ad-btn" href="#">View</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" style="margin-top: 15px">
                <div class="card rounded">
                    <div class="card-image">
                        <span class="card-notify-badge">Fully-Loaded</span>
                        <span class="card-notify-year">2017</span>
                        <img
                            class="img-fluid"
                            src="../assets/bac2.jpg"
                            alt="Alternate Text"
                        />
                    </div>
                    <div class="card-image-overlay m-auto">
                        <span class="card-detail-badge">Used</span>
                        <span class="card-detail-badge">$28,000.00</span>
                        <span class="card-detail-badge">13000 Kms</span>
                    </div>
                    <div class="card-body text-center">
                        <div class="ad-title m-auto">
                            <h5>Honda CIVIC HATCHBACK LS</h5>
                        </div>
                        <a class="ad-btn" href="#">View</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4" style="margin-top: 15px">
                <div class="card rounded">
                    <div class="card-image">
                        <span class="card-notify-badge">Price Reduced</span>
                        <span class="card-notify-year">2021</span>
                        <img
                            class="img-fluid"
                            src="../assets/bac3.jpg"
                            alt="Alternate Text"
                        />
                    </div>
                    <div class="card-image-overlay m-auto">
                        <span class="card-detail-badge">Used</span>
                        <span class="card-detail-badge">$22,000.00</span>
                        <span class="card-detail-badge">8000 Kms</span>
                    </div>
                    <div class="card-body text-center">
                        <div class="ad-title m-auto">
                            <h5>Honda Accord Hybrid LT</h5>
                        </div>
                        <a class="ad-btn" href="#">View</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="ads" style="margin-top: 15px">
            <!-- Category Card -->
            <div class="col-md-4" style="margin-top: 15px">
                <div class="card rounded">
                    <div class="card-image">
                        <span class="card-notify-badge">Low KMS</span>
                        <span class="card-notify-year">2018</span>
                        <img
                            class="img-fluid"
                            src="../assets/bac4.jpg"
                            alt="Alternate Text"
                        />
                    </div>
                    <div class="card-image-overlay m-auto">
                        <span class="card-detail-badge">Used</span>
                        <span class="card-detail-badge">$29,000.00</span>
                        <span class="card-detail-badge">13000 Kms</span>
                    </div>
                    <div class="card-body text-center">
                        <div class="ad-title m-auto">
                            <h5>Honda Accord LX</h5>
                        </div>
                        <a class="ad-btn" href="#">View</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" style="margin-top: 15px">
                <div class="card rounded">
                    <div class="card-image">
                        <span class="card-notify-badge">Fully-Loaded</span>
                        <span class="card-notify-year">2020</span>
                        <img
                            class="img-fluid"
                            src="../assets/bac5.jpg"
                            alt="Alternate Text"
                        />
                    </div>
                    <div class="card-image-overlay m-auto">
                        <span class="card-detail-badge">Used</span>
                        <span class="card-detail-badge">$30,000.00</span>
                        <span class="card-detail-badge">13000 Kms</span>
                    </div>
                    <div class="card-body text-center">
                        <div class="ad-title m-auto">
                            <h5>Honda CIVIC HATCHBACK LS</h5>
                        </div>
                        <a class="ad-btn" href="#">View</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4" style="margin-top: 15px">
                <div class="card rounded">
                    <div class="card-image">
                        <span class="card-notify-badge">Price Reduced</span>
                        <span class="card-notify-year">2019</span>
                        <img
                            class="img-fluid"
                            src="../assets/bac6.jpg"
                            alt="Alternate Text"
                        />
                    </div>
                    <div class="card-image-overlay m-auto">
                        <span class="card-detail-badge">Used</span>
                        <span class="card-detail-badge">$22,000.00</span>
                        <span class="card-detail-badge">8000 Kms</span>
                    </div>
                    <div class="card-body text-center">
                        <div class="ad-title m-auto">
                            <h5>Honda Accord Hybrid LT</h5>
                        </div>
                        <a class="ad-btn" href="#">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#ads {
    margin: 30px 0 30px 0;
}

#ads .card-notify-badge {
    position: absolute;
    left: -10px;
    top: -20px;
    background: rgb(160, 158, 158);
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color: #000;
    padding: 5px 10px;
    font-size: 14px;
}

#ads .card-notify-year {
    position: absolute;
    right: -10px;
    top: -20px;
    background: #eb9999;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    width: 50px;
    height: 50px;
    padding: 15px 0 0 0;
}

#ads .card-detail-badge {
    background: rgb(206, 204, 204);
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color: #000;
    padding: 5px 10px;
    font-size: 14px;
}

#ads .card:hover {
    background: #fff;
    box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
    border-radius: 4px;
    transition: all 0.3s ease;
}

#ads .card-image-overlay {
    font-size: 20px;
}

#ads .card-image-overlay span {
    display: inline-block;
}

#ads .ad-btn {
    text-transform: uppercase;
    width: 150px;
    height: 40px;
    border-radius: 80px;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    border: 3px solid rgb(136, 134, 134);
    display: block;
    text-decoration: none;
    margin: 20px auto 1px auto;
    color: #000;
    overflow: hidden;
    position: relative;
    background-color: rgb(136, 134, 134);
}

#ads .ad-btn:hover {
    background-color: rgb(136, 134, 134);
    color: #1e1717;
    border: 2px solid rgb(136, 134, 134);
    background: transparent;
    transition: all 0.3s ease;
    box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
}

#ads .ad-title h5 {
    text-transform: uppercase;
    font-size: 18px;
}
</style>
